/* ============================================
   THE LAST MOVE — Hero Canvas Animation
   Blueprint / technical grid with subtle movement
   ============================================ */

(function () {
  'use strict';

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let animationId;
  let nodes = [];
  let time = 0;

  const CONFIG = {
    nodeCount: 60,
    maxConnectionDist: 180,
    nodeSpeed: 0.15,
    nodeSize: 1.5,
    lineWidth: 0.4,
    colorNode: 'rgba(201, 168, 76, 0.4)',
    colorLine: 'rgba(201, 168, 76, 0.06)',
    colorLineActive: 'rgba(201, 168, 76, 0.12)',
    gridColor: 'rgba(255, 255, 255, 0.015)',
    gridSpacing: 80,
    fps: 30
  };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.offsetWidth;
    height = canvas.offsetHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  function createNodes() {
    nodes = [];
    for (let i = 0; i < CONFIG.nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * CONFIG.nodeSpeed,
        vy: (Math.random() - 0.5) * CONFIG.nodeSpeed,
        size: CONFIG.nodeSize * (0.5 + Math.random() * 0.8),
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  function drawGrid() {
    ctx.strokeStyle = CONFIG.gridColor;
    ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = 0; x < width; x += CONFIG.gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = 0; y < height; y += CONFIG.gridSpacing) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
  }

  function updateNodes() {
    for (const node of nodes) {
      node.x += node.vx;
      node.y += node.vy;
      node.pulse += 0.01;

      // Wrap around edges
      if (node.x < -10) node.x = width + 10;
      if (node.x > width + 10) node.x = -10;
      if (node.y < -10) node.y = height + 10;
      if (node.y > height + 10) node.y = -10;
    }
  }

  function drawConnections() {
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONFIG.maxConnectionDist) {
          const opacity = 1 - dist / CONFIG.maxConnectionDist;
          const pulse = (Math.sin(time * 0.5 + i * 0.1) + 1) * 0.5;
          
          ctx.strokeStyle = `rgba(201, 168, 76, ${opacity * 0.08 * (0.5 + pulse * 0.5)})`;
          ctx.lineWidth = CONFIG.lineWidth;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function drawNodes() {
    for (const node of nodes) {
      const pulse = (Math.sin(node.pulse) + 1) * 0.5;
      const alpha = 0.2 + pulse * 0.3;

      // Outer glow
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size * 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 168, 76, ${alpha * 0.08})`;
      ctx.fill();

      // Core
      ctx.beginPath();
      ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201, 168, 76, ${alpha})`;
      ctx.fill();
    }
  }

  let lastFrameTime = 0;
  const frameInterval = 1000 / CONFIG.fps;

  function animate(timestamp) {
    animationId = requestAnimationFrame(animate);

    const elapsed = timestamp - lastFrameTime;
    if (elapsed < frameInterval) return;
    lastFrameTime = timestamp - (elapsed % frameInterval);

    ctx.clearRect(0, 0, width, height);
    time += 0.016;

    drawGrid();
    updateNodes();
    drawConnections();
    drawNodes();
  }

  function init() {
    resize();
    createNodes();
    animate(0);
  }

  // Debounced resize
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      createNodes();
    }, 250);
  });

  // Pause when not visible
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      cancelAnimationFrame(animationId);
    } else {
      animate(0);
    }
  });

  // Initialize
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

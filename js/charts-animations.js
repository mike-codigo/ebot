// Chart and counter animations
document.addEventListener('DOMContentLoaded', () => {
  const animateValue = (obj, start, end, duration, prefix='', suffix='') => {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      obj.innerHTML = prefix + Math.floor(easeProgress * (end - start) + start) + suffix;
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target;

        // Counters (if target is a counter or contains counters)
        const counters = target.classList.contains('counter-value') ? [target] : target.querySelectorAll('.counter-value');
        counters.forEach(counter => {
          if (!counter.dataset.animated) {
            const end = parseInt(counter.dataset.end || 0);
            const prefix = counter.dataset.prefix || '';
            const suffix = counter.dataset.suffix || '';
            animateValue(counter, 0, end, 2000, prefix, suffix);
            counter.dataset.animated = 'true';
          }
        });

        // Circle Progress
        const circle = target.classList.contains('circle-progress-bar') ? target : target.querySelector('.circle-progress-bar');
        if (circle && !circle.dataset.animated) {
          const percent = circle.dataset.percent || 100;
          const offset = 283 - (283 * percent / 100);
          circle.style.strokeDashoffset = offset;
          circle.dataset.animated = 'true';
        }

        // Bar Chart
        const bars = target.classList.contains('bar') ? [target] : target.querySelectorAll('.bar');
        bars.forEach(bar => {
          bar.style.transform = 'scaleY(1)';
        });

        // Line Graph
        const linePath = target.classList.contains('line-path') ? target : target.querySelector('.line-path');
        if (linePath && !linePath.dataset.animated) {
          linePath.style.strokeDashoffset = 0;
          linePath.dataset.animated = 'true';
        }
      }
    });
  }, observerOptions);

  // Observe all elements that might need animation independently
  document.querySelectorAll('.chart-container, .counter-value, .circle-progress-bar, .bar, .line-path').forEach(el => observer.observe(el));
});

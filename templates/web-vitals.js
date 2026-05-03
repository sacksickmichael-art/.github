import {onCLS, onFCP, onINP, onLCP, onTTFB} from 'https://unpkg.com/web-vitals@4?module';

function report(metric) {
  console.log(`[web-vitals] ${metric.name}: ${metric.value.toFixed(2)} (${metric.rating})`);
  if (typeof gtag === 'function') {
    gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      metric_id: metric.id,
      metric_value: metric.value,
      metric_rating: metric.rating,
    });
  }
}

onCLS(report);
onFCP(report);
onINP(report);
onLCP(report);
onTTFB(report);

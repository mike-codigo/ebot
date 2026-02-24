const fs = require('fs');

const goodCss = `/* --- ECOSYSTEM LAYOUT --- */
.ecosystem-layout {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  z-index: 10;
}

@media (min-width: 992px) {
  .ecosystem-layout {
    flex-direction: row;
    align-items: stretch;
    justify-content: center;
  }
}

.ecosystem-col {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
}

.ecosystem-left {
  justify-content: center;
}

.ecosystem-right {
  justify-content: center;
}

.ecosystem-center {
  flex: 0 0 auto;
  width: auto !important;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* --- IPHONE INTERACTIVE --- */
.iphone-interactive {
  position: relative;
  width: 320px;
  height: 693px; /* ~ 9:16 aspect ratio */
  cursor: none; /* Hide default cursor */
  border-radius: 44px;
  transform: perspective(1000px) rotateY(0deg) scale(1);
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  z-index: 20;
}

@media (min-width: 1200px) {
  .iphone-interactive {
    width: 360px;
    height: 780px;
  }
}

.iphone-device {
  width: 100%;
  height: 100%;
  border-radius: 44px;
  background: #111;
  padding: 12px;
  box-shadow: 
    0 0 0 2px #333,
    0 0 0 4px #555,
    inset 0 0 0 4px #000,
    0 30px 60px -15px rgba(0, 0, 0, 0.5),
    0 20px 40px -10px rgba(136, 167, 47, 0.3); /* Green ambient glow */
  position: relative;
  overflow: hidden;
  display: flex;
}

.iphone-notch {
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 140px;
  height: 30px;
  background: #000;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  z-index: 10;
}

.iphone-screen {
  width: 100%;
  height: 100%;
  border-radius: 32px;
  background: #000;
  overflow: hidden;
  position: relative;
}

.iphone-video-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none; /* Let pointer events go to container */
}

/* CUSTOM CURSOR INSIDE IPHONE */
.iphone-custom-cursor {
  position: fixed !important;
  white-space: nowrap;
  width: max-content;
  top: 0;
  left: 0;
  background: rgba(136, 167, 47, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  pointer-events: none;
  opacity: 0; visibility: hidden;
  transform: translate(-50%, -50%) scale(0.5);
  transition: opacity 0.2s, transform 0.2s;
  z-index: 100000;
  box-shadow: 0 4px 15px rgba(0,0,0,0.3);
  backdrop-filter: blur(5px);
  will-change: transform;
}

.iphone-interactive:hover .iphone-custom-cursor {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}
.iphone-custom-cursor.visible {
  opacity: 1;
  visibility: visible;
  transform: translate(-50%, -50%) scale(1);
}

/* --- GLASS LIQUID CARDS --- */
.glass-liquid-card {
  position: relative;
  background: rgba(47, 56, 53, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 2rem;
  overflow: visible;
  color: #fff;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.glass-liquid-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
  pointer-events: none;
  z-index: 1;
  border-radius: 24px;
  overflow: hidden;
}

.glass-liquid-card:hover {
  transform: translateY(-5px);
  border-color: rgba(136, 167, 47, 0.8);
  box-shadow: 0 15px 35px rgba(0,0,0,0.2), 0 0 20px rgba(136, 167, 47, 0.1);
}

/* FLASHLIGHT HOVER EFFECT */
.flashlight-glow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle 250px at var(--mouse-x, -500px) var(--mouse-y, -500px), rgba(136, 167, 47, 0.15), transparent 80%);
  pointer-events: none;
  z-index: 0;
  transition: opacity 0.3s;
  opacity: 0;
  border-radius: 24px;
  overflow: hidden;
}

.glass-liquid-card:hover .flashlight-glow {
  opacity: 1;
}

/* CARD CONTENT & STYLES */
.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.dev-badge {
  font-size: 0.6rem;
  font-weight: 600;
  background: rgba(136, 167, 47, 0.1);
  color: #2ecc71;
  padding: 2px 6px;
  border-radius: 4px;
  border: 1px solid rgba(136, 167, 47, 0.3);
}

.card-icon-wrapper {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  padding: 8px;
  box-shadow: inset 0 0 10px rgba(136, 167, 47, 0.1);
}

.card-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #fff;
}

.card-desc {
  color: #eee;
  margin-bottom: 1.5rem;
}

.card-list {
  margin-bottom: 2rem;
  flex: 1;
}

.card-list li {
  margin-bottom: 0.5rem;
  color: #ddd;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
}

.card-list li::before {
  content: "•";
  color: var(--primary); /* Green ebot */
  font-weight: bold;
}

/* NEON BUTTON */
.btn-neon {
  display: inline-block;
  background: rgba(136, 167, 47, 0.4);
  color: #fff;
  border: 2px solid rgba(136, 167, 47, 0.5);
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;
  text-shadow: none;
}

.btn-neon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.btn-neon:hover {
  border-color: var(--primary);
  color: #fff;
  box-shadow: 0 0 15px rgba(136, 167, 47, 0.6), inset 0 0 10px rgba(136, 167, 47, 0.8);
  text-shadow: 0 0 8px rgba(255,255,255,0.8);
}

.btn-neon:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.w-100 {
  width: 100%;
}

/* --- VIDEO MODAL --- */
.video-modal-overlay {
  position: fixed;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100000;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.video-modal-overlay.active {
  opacity: 1;
  visibility: visible;
}

.modal-iphone {
  height: 90vh;
  width: calc(90vh * 9 / 16);
  max-width: 95vw; /* don't exceed screen width */
  transform: scale(0.8);
  transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;
  margin: 0 auto;
}

.video-modal-overlay.active .modal-iphone {
  transform: scale(1);
}

.video-modal-close {
  position: fixed !important;
  top: 30px;
  right: 40px;
  background: rgba(255,255,255,0.1);
  border: 1px solid rgba(255,255,255,0.2);
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100001;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
}

.video-modal-close:hover {
  background: rgba(136, 167, 47, 0.8);
  transform: scale(1.1);
}

/* --- HOVER ANIMATION OVERLAY --- */
.tool-hover-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(136, 167, 47, 0.95);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(0.95);
  pointer-events: none;
  border-radius: 24px;
}

.glass-liquid-card:has(.btn-neon:hover) .tool-hover-overlay {
  opacity: 1;
  visibilit

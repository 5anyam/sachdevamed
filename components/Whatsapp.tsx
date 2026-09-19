import { IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';

function Whatsapp() {
  return (
    <Link
      passHref
      href="https://api.whatsapp.com/send?phone=919891521090"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="wa-float"
      style={{ position: 'fixed', bottom: 90, right: 20, zIndex: 999, display: 'block' }}
    >
      <div style={{ position: 'relative', width: 52, height: 52 }}>
        <span className="wa-ring" />
        <span className="wa-ring wa-ring-2" />
        <IconBrandWhatsapp
          className="wa-icon"
          style={{
            position: 'relative',
            background: '#25d366',
            color: 'white',
            height: 52,
            width: 52,
            borderRadius: 12,
            padding: 8,
            display: 'block',
            boxShadow: '0 4px 14px rgba(37,211,102,0.45)',
          }}
        />
        <span className="wa-dot" />
      </div>
      <style>{`
        .wa-ring {
          position: absolute; inset: 0; border-radius: 12px;
          background: rgba(37,211,102,0.55);
          animation: wa-pulse 2s ease-out infinite;
        }
        .wa-ring-2 { animation-delay: 1s; }
        .wa-icon { animation: wa-bob 2s ease-in-out infinite; }
        .wa-dot {
          position: absolute; top: -3px; right: -3px; width: 12px; height: 12px;
          border-radius: 50%; background: #ff3b30; border: 2px solid #fff;
          animation: wa-blink 1.2s ease-in-out infinite;
        }
        .wa-float:hover .wa-icon { transform: scale(1.08); animation-play-state: paused; }
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        @keyframes wa-bob {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-3px); }
        }
        @keyframes wa-blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wa-ring, .wa-icon, .wa-dot { animation: none; }
        }
      `}</style>
    </Link>
  );
}

export default Whatsapp;

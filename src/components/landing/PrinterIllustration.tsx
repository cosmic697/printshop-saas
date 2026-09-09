export default function PrinterIllustration() {
  return (
    <div>
      <svg
        viewBox="0 0 280 280"
        width="100%"
        height="280"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Orbit */}
        <circle
          cx="140"
          cy="150"
          r="95"
          fill="none"
          stroke="#1F1F27"
          strokeWidth="1"
          strokeDasharray="4 6"
        />

        {/* Decorative dots */}
        <circle cx="10" cy="20" r="1.8" fill="#4F46E5" />
        <circle cx="40" cy="10" r="1.8" fill="#4F46E5" />
        <circle cx="70" cy="30" r="1.8" fill="#4F46E5" />

        <circle cx="230" cy="15" r="1.8" fill="#4F46E5" />
        <circle cx="260" cy="45" r="1.8" fill="#4F46E5" />

        <circle cx="20" cy="250" r="1.8" fill="#4F46E5" />
        <circle cx="255" cy="240" r="1.8" fill="#4F46E5" />
        <circle cx="270" cy="200" r="1.8" fill="#4F46E5" />

        {/* Upload floating circle */}
        <circle
          cx="65"
          cy="90"
          r="20"
          fill="#1C1B2E"
          stroke="#3A38C8"
          strokeWidth="1"
        />

        {/* Upload icon */}
        <path
          d="M65 96V84M60 89L65 84L70 89"
          fill="none"
          stroke="#A5ADFF"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Settings floating circle */}
        <circle
          cx="215"
          cy="90"
          r="20"
          fill="#1C2A26"
          stroke="#1E7A5F"
          strokeWidth="1"
        />

        {/* Settings icon */}
        <circle
          cx="215"
          cy="90"
          r="6"
          fill="none"
          stroke="#6EE7B7"
          strokeWidth="2"
        />

        <circle cx="215" cy="90" r="2" fill="#6EE7B7" />

        {/* Printer body */}
        <rect
          x="95"
          y="150"
          width="90"
          height="55"
          rx="10"
          fill="#16161D"
          stroke="#2A2A35"
          strokeWidth="1"
        />

        {/* Paper */}
        <rect x="115" y="120" width="50" height="40" rx="4" fill="#EDEDF2" />

        {/* QR code */}
        <rect x="123" y="128" width="6" height="6" fill="#0A0A0F" />
        <rect x="133" y="128" width="6" height="6" fill="#0A0A0F" />
        <rect x="143" y="128" width="6" height="6" fill="#0A0A0F" />

        <rect x="123" y="138" width="6" height="6" fill="#0A0A0F" />

        <rect x="143" y="146" width="6" height="6" fill="#0A0A0F" />
        <rect x="133" y="146" width="6" height="6" fill="#0A0A0F" />

        {/* Printer status light */}
        <circle cx="175" cy="177" r="4" fill="#34D399" />

        {/* Completed floating circle */}
        <circle
          cx="140"
          cy="235"
          r="20"
          fill="#241B2E"
          stroke="#7C3AA0"
          strokeWidth="1"
        />

        {/* Check icon */}
        <path
          d="M132 235L138 241L149 229"
          fill="none"
          stroke="#D8B4FE"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
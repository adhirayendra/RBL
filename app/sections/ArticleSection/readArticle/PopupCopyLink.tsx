"use client";

import { FiCopy, FiCheck } from "react-icons/fi";

interface PopupCopyLinkProps {
  isOpen: boolean;
  isCopied: boolean;
  onClose: () => void;
  onCopy: () => Promise<void>;
}

export default function PopupCopyLink({
  isOpen,
  isCopied,
  onClose,
  onCopy,
}: PopupCopyLinkProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs px-4">
      {/* Animasi Masuk Disederhanakan Menjadi Fade-In Simpel */}
      <div className="bg-white text-black p-6 rounded-2xl w-full max-w-md shadow-2xl relative animate-in fade-in duration-150">
        <h3 className="text-lg font-bold mb-2 text-gray-900">
          Bagikan Artikel Ini
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Salin tautan di bawah ini untuk membagikan kepada teman-teman
          kampusmu:
        </p>

        {/* Input & Button Container */}
        <div className="flex items-center gap-2 border border-gray-300 rounded-xl p-2 bg-gray-50">
          <input
            type="text"
            readOnly
            value={typeof window !== "undefined" ? window.location.href : ""}
            className="bg-transparent text-sm text-gray-700 w-full outline-hidden px-2 select-all"
          />

          {/* Tombol Copy dengan Perubahan Status Ikon */}
          <button
            onClick={onCopy}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg font-bold text-sm transition-all whitespace-nowrap cursor-pointer
              ${isCopied ? "bg-green-600 text-white" : "bg-amber-500 hover:bg-amber-600 text-white"}
            `}
          >
            {isCopied ? (
              <>
                <FiCheck size={16} />
                Copied!
              </>
            ) : (
              <>
                <FiCopy size={16} />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Tombol Close Modal */}
        <button
          onClick={onClose}
          className="mt-6 w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl font-semibold text-sm transition-colors cursor-pointer text-center block"
        >
          Tutup
        </button>
      </div>
    </div>
  );
}

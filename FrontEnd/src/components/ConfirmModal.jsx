import { motion, AnimatePresence } from "framer-motion";

export default function ConfirmModal({ open, onClose, onConfirm, title }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-md">
              <h2 className="text-xl font-bold mb-4 text-center">
                {title || "Are you sure?"}
              </h2>

              <div className="flex gap-4">
                <button
                  onClick={onClose}
                  className="flex-1 py-2 rounded-xl border border-slate-300 font-semibold hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  className="flex-1 py-2 rounded-xl bg-rose-600 text-white font-semibold hover:brightness-110"
                >
                  Delete
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
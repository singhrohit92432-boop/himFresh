/**
 * Modal Component
 * Props:
 * - isOpen: Controls visibility
 * - onClose: Closes modal
 * - title: Modal heading
 * - children: Modal content
 */





export default function Modal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-2">Modal Title</h2>
        <p>This is modal content.</p>
      </div>
    </div>
  );
}
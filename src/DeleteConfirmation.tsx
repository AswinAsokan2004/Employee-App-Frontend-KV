import "./DeleteConfirmation.css";

type Props = {
  onConfirm: () => void;
  onCancel: () => void;
};

function DeleteConfirmation({ onConfirm, onCancel }: Props) {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <h2>Are you sure ?</h2>

        <p>
          Do you really want to delete employee?
        </p>

        <div className="modal-actions">
          <button
            className="cancel-btn"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="confirm-btn"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmation;
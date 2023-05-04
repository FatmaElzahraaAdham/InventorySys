import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/EditProductModal.css"

function GeneralModal({ title, initialValues, formFields, onSubmit, onClose, onDelete }) {
    const [values, setValues] = useState(initialValues);

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit(values);
    }

    return (
        <div className="product-modal">
            <div className="product-modal-content">
                <h2>{title}</h2>
                <form onSubmit={handleSubmit}>
                    {formFields.map((field) => (
                        <label key={field.name}>
                            {field.label}
                            {field.type === 'select' ? (
                                <select
                                    name={field.name}
                                    value={values[field.name]}
                                    onChange={(e) =>
                                        setValues({ ...values, [field.name]: e.target.value })
                                    }
                                    className="custom-select"
                                >
                                    {field.options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={values[field.name]}
                                    onChange={(e) =>
                                        setValues({ ...values, [field.name]: e.target.value })
                                    }
                                />
                            )}
                        </label>
                    ))}
                    <div className="product-modal-actions">
                        <button className="save" type="submit">
                            Save
                        </button>
                        {onDelete && (
                            <button className="delete" type="button" onClick={onDelete}>
                                Delete
                            </button>
                        )}
                        <button className="cancel" type="button" onClick={onClose}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

GeneralModal.propTypes = {
    initialValues: PropTypes.object.isRequired,
    formFields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(
                PropTypes.shape({
                    label: PropTypes.string.isRequired,
                    value: PropTypes.any.isRequired,
                })
            ),
        })
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func,
};

export default GeneralModal;

import './style.css';

export const Button = ({ onclick, text, disabled }) => {
  return (
    <div>
      <button disabled={disabled} className="button" onClick={onclick}>
        {text}
      </button>
    </div>
  );
};

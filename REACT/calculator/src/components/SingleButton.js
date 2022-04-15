import "../componentStyles/SingleButton.css";
export function SingleButton({ classe, valore, onclick }) {
  return (
    <button className={classe} onClick={onclick}>
      {valore}
    </button>
  );
}

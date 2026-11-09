export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message" role="alert">
      <h3>Something went wrong</h3>
      <p>{message}</p>
      {onRetry ? (
        <button type="button" className="primary-button" onClick={onRetry}>
          Retry
        </button>
      ) : null}
    </div>
  )
}

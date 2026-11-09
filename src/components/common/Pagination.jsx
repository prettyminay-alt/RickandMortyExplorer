export default function Pagination({ page, totalPages, onPrevious, onNext }) {
  const isFirstPage = page <= 1
  const isLastPage = page >= totalPages

  return (
    <div className="pagination">
      <button type="button" className="nav-button" onClick={onPrevious} disabled={isFirstPage}>
        Previous
      </button>

      <span className="page-indicator">
        Page {page} of {totalPages || 1}
      </span>

      <button type="button" className="nav-button" onClick={onNext} disabled={isLastPage}>
        Next
      </button>
    </div>
  )
}

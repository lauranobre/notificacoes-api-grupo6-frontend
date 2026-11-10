function FilterChip({ label, ativo, onClick }) {
    return (
        <button
            type="button"
            aria-pressed={ativo}
            onClick={onClick}
            className={`px-3 py-1.5 rounded-full text-sm border transition-colors cursor-pointer ${
                ativo
                    ? "bg-marca text-white border-marca font-semibold"
                    : "bg-white text-gray-500 border-gray-200 hover:bg-gray-50"
            }`}
        >
            {label}
        </button>
    );
}

export default FilterChip;
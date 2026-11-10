function Button({ children, variant = "primario", type = "button", onClick }) {
    const estilos = {
        primario: "bg-marca text-white",
        destaque: "bg-destaque text-white",
    };
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-4 py-2 rounded-lg font-semibold ${estilos[variant]}`}
        >
            {children}
        </button>
    );
}
export default Button;
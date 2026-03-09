function Button({ children, variant = "primary" }) { 
    const base="px-6 py-3 rounded-lg font-semibold transition"

    const style = {
        primary: 
            "bg-blue-600 text-white hover:bg-blue-700",
        secondary: 
            "border border-white text-slate-400 hover:bg-slate-200 hover:border-slate-200 hover:text-blue-700",
        light: 
            "bg-white text-blue-700 hover:bg-slate-200"
    }

    return(
        <button className={`${base} ${style[variant]}`}>
            {children}
        </button>
    )
}

export default Button
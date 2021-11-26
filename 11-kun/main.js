const inputs = document.querySelectorAll("input");

function uzgartir() {
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(
        `--${this.name}`,
        this.value + suffix
    );
}

inputs.forEach((input) => input.addEventListener("change", uzgartir));
inputs.forEach((input) => input.addEventListener("mousemove", uzgartir));

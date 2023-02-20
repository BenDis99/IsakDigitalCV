export function CategoryButton(props) {
    const {text, href} = props;
    const button = document.createElement('a');
    button.textContent = text;
    button.href = href;
    button.className = "category_button"
    return button;
}
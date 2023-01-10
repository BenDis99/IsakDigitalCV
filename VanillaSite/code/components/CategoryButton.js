export function CategoryButton(props) {
    const {onclick, text, href} = props;
    const button = document.createElement('a');
    button.textContent = text;
    button.href = href;
    button.className = "category_button"
    //button.onclick = onclick;
    return button;
}
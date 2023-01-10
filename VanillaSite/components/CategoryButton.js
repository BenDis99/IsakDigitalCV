export function CategoryButton(props) {
    const {onclick, text} = props;
    const button = document.createElement('button');
    button.textContent = text;
    button.className = "category_button"
    button.onclick = onclick;
    return button;
}
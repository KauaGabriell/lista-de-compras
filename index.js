const lista = document.querySelector("ul")
const nameNewItem = document.querySelector("input")
const form = document.getElementById("enviarForm")

//Manipulando o Input para Regex
nameNewItem.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") return;
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]$/.test(event.key)) {
        event.preventDefault(); // Bloqueia a entrada se não for permitido
    }
});
//Adicionando Itens

form.addEventListener("click", ()=>{
    //Criando elemento li com classes
    const newItem = document.createElement("li")
    newItem.innerText = nameNewItem.value
    lista.appendChild(newItem)
    newItem.classList.add("flex", "items-center", "gap-3", "px-3", "py-2", "w-full", "bg-white", "rounded-xl")

    //Criando CheckBox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("w-4", "h-4", "rounded-md", "border-gray-300")

    //Criando Label
    const label = document.createElement("label")
    label.classList.add("flex-1", "font-['Inter']", "font-[500]", "text-gray-700", "text-[16px]", "leading-[24px]");
    label.textContent = nameNewItem.value;

    //Criando Botão de Deletar
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("p-2", "rounded-xl", "hover:bg-gray-100");

    //Criando imagem do botão
    const deleteImg = document.createElement("img");
    deleteImg.src = "/assets/icon delete.png";
    deleteImg.alt = "Delete";
    deleteImg.classList.add("w-10", "h-10");

    //Adicionando a imagem do botão
    deleteButton.appendChild(deleteImg);

    //Adicionando Filhos
    newItem.appendChild(checkbox)
})

# reactjs-icons-component (Em desenvolvimento)
É um simples componente desenvolvido em react js para renderizar icons em svg.

## Componente `<Icon />`
Provisoriamente o componente terá as seguintes propriedades:

| Propriedades | Tipo   | Descrição                          | Exemplo   |
|--------------|--------|------------------------------------|-----------|
| icon         | string | Nome da chave que contem o path do icon | `HOME`          |
| size         | number | Tamanho do icon                    | `16px`    |
| color        | string | Cor em hexadecimal do icon         | `#ffffff` |

## Exemplo de Uso

```js
<Icon
  icon="HOME"
  size={16}
  color="#000000"
/>
```

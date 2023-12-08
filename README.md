# Proyecto final de ReactJs, para la plataforma de Elearing Coderhouse

Este proyecto consiste en un Ecommerce donde se puede presionar en la categorías para filtar el producto, ver detalles, agregar al carrito y realizar la compra.

- En la página de inicio se podrán ver todos los productos sin ningún filtro. En la parte superior (dependiendo del tamaño) estará la NavBar
- La navBar es responsiva, si se achica se transformará en un menú hamburguesa que al presionar podrán verse las catergoría. Del lado derecho siempre estará el ícono del carrito el cual mostrará los items agregados.
- Al presionar en una categoría, se filtrará los productos por la categoría mencionada y el link cambiará su ruta agregando una barra "/" y el nombre de la categoría.
- Cada categoría cuenta con subcategoría que serán un filtro más para los productos, realizando el mismo procedimiento que la categoría.
- Cada producto tiene un botón de detalle, al apretarlo se modificará el link en el que está parado a : "item/IdDelItem" siendo ese Id alfanumérico definido por firebase
- Dentro de los detalles se puede observar una imagen del producto, descripción, nombre, precio y un contador para el contéo de productos y otro botón de agregar al carrito que solo se puede usar cuando el contador sea mayor de 0. Caso contrario al apoyar el puntero en el botón el ícono del puntero cambiará a uno que demuestre que no se puede usar.
- Toda esta sección es responsiva y se adapta al tamaño de la pantalla, si la descripción se larga se acortará y al apoyar el mouse sobre la misma se podrá desplazar con la rueda del mouse. 
- Al presionar "Agregar al carrito" y que el contador sea mayor de 0, el carrito en la parte superior derecha cambiará su número dependiendo de la cantidad de items agregados.
- Al presionar en el carrito se viajará a : "/Cart" donde podrá ver todos los itemas agregados al carrito, el total de la compra y un formulario para hacer el pedido.
- El formulario del pedido funcionará una vez llenado todos los campos y que el mail y su verificación sean el mismo. Luego de eso se habilitará la compra
- Al clickear en la compra, el botón desaparecerá y luego de un tiempo aparecerá una leyenda con el número de orden.
- El formulario solo será visible si hay productos en el cart
# Librerías y otras herramientas utilizadas no obligatorias

- Tailwindcss
- React-Icons

Tailwindcss fue utilizado para estilar diferentes componentes y sus elementos jsx. Solamente se utilizó las clases dentro de los "className" no se crearon configuraciones propias. Por otro lado, React-Icons fue utilizado para facilitar la inserción de íconos como el cart.


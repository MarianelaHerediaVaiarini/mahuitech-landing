export const guides = [
  {
    slug: 'cuanto-cuesta-una-web-para-un-negocio',
    title: '¿Cuánto cuesta una web para un negocio pequeño en España?',
    description: 'Compara una web de una página, una web de varios servicios y una con reservas. Incluye un ejemplo de coste del primer año.',
    answer: 'En Mahui Tech, una web profesional de una página parte de 950 € sin IVA y suele llevar entre 3 y 4 semanas. Incluye diseño adaptado a tu marca, versión móvil, formulario de contacto y SEO básico. Para saber qué te conviene contratar, empieza por lo que quieres que haga el cliente al entrar.',
    sections: [
      {
        title: 'Qué web necesita tu negocio',
        table: {
          columns: ['Si tu negocio…', 'Qué pedir en el presupuesto'],
          rows: [
            ['Ofrece un servicio principal', 'Una página con la propuesta, ejemplos del trabajo y un formulario. Sirve, por ejemplo, para un fotógrafo que quiere recibir consultas para bodas.'],
            ['Ofrece varios servicios', 'Una portada y páginas para las ofertas más distintas. Un estudio de reformas puede separar cocinas y baños para mostrar ejemplos y responder las preguntas de cada servicio.'],
            ['Ya usa una agenda online', 'Un enlace a esa agenda puede cubrir la reserva. Si quieres integrar disponibilidad, pagos y confirmaciones en la web, pide que detallen esa parte por separado.'],
          ],
        },
      },
      {
        title: 'Un ejemplo del coste del primer año',
        text: 'Si contratas una web de 950 € y añades 12 meses de mantenimiento desde 59 €/mes, ambos conceptos suman 1.658 € sin IVA. Si el dominio, el alojamiento o alguna licencia se cobran aparte, suma también esos importes. Así puedes comparar dos propuestas aunque una concentre el coste al inicio y la otra cobre parte cada mes.',
      },
      {
        title: 'Cuatro preguntas antes de contratar',
        items: [
          '¿Qué páginas incluye y quién prepara los textos, las fotos y las traducciones?',
          '¿Qué importe pago al publicar y qué importes se repiten cada año?',
          '¿Qué puedo editar por mi cuenta y cómo se cobran los cambios que encargue después?',
          '¿A nombre de quién queda el dominio y qué accesos recibo al terminar?',
        ],
      },
    ],
    service: { fragment: 'web-corporativa', label: 'Ver el servicio de diseño web' },
  },
  {
    slug: 'cuando-merece-la-pena-un-erp-a-medida',
    title: '¿Cuándo merece la pena un ERP a medida?',
    description: 'Prueba tu proceso con un pedido real, compara hoja de cálculo, software estándar y ERP a medida, y mide qué módulo conviene abordar primero.',
    answer: 'Un ERP a medida empieza a tener sentido cuando el mismo error se repite en un proceso importante y el software estándar sigue dejando ese paso en manos del equipo. Para comprobarlo, reproduce un pedido real desde que entra hasta que se entrega o se cancela.',
    sections: [
      {
        title: 'La prueba de las diez unidades',
        text: 'Imagina que tienes 10 unidades. Ventas confirma un pedido de 7 y, antes de que se actualice la hoja de inventario, entra otro de 5. Al probar una herramienta, comprueba que el segundo pedido muestra 3 unidades disponibles y que cancelar el primero vuelve a liberar sus 7. Si ventas y almacén ven resultados distintos, ya encontraste qué debe resolver el primer módulo.',
      },
      {
        title: 'Hoja de cálculo, software estándar o ERP a medida',
        table: {
          columns: ['Opción', 'Cuándo encaja'],
          rows: [
            ['Hoja de cálculo', 'El volumen es manejable, hay una persona responsable de las actualizaciones y los errores son fáciles de detectar y corregir.'],
            ['Software estándar', 'El equipo completa pedidos, devoluciones y ajustes de stock dentro del programa, incluso en los casos que salen de la rutina.'],
            ['ERP a medida', 'Una regla importante, como reservar stock por almacén o aprobar pedidos por importe, obliga al equipo a volver al correo o a una hoja auxiliar.'],
          ],
        },
      },
      {
        title: 'Cómo elegir y medir el primer módulo',
        text: 'Si corriges 10 pedidos por semana y cada corrección lleva 12 minutos, son 2 horas semanales. Define un primer alcance, por ejemplo confirmar pedidos y reservar o liberar stock. Vuelve a medir después de ponerlo en marcha. Además del tiempo ahorrado, cuenta los pedidos que ya puedes confirmar sin pedirle al almacén que verifique las unidades.',
      },
    ],
    service: { fragment: 'sistemas-gestion', label: 'Ver el servicio de ERP a medida' },
  },
  {
    slug: 'automatizar-presupuestos-con-hojas-de-calculo',
    title: 'Cómo automatizar presupuestos con hojas de cálculo',
    description: 'Sigue un presupuesto de ejemplo desde la primera partida hasta la aceptación y prueba el flujo antes de automatizar el envío.',
    answer: 'Para automatizar presupuestos, guarda cada uno en una fila con número y estado. Usa esos estados para decidir cuándo generar el PDF, registrar el envío o avisar al equipo. Puedes empezar por el paso que hoy te lleva más tiempo, como volver a copiar los datos para preparar el PDF.',
    sections: [
      {
        title: 'Ejemplo de hoja para el presupuesto P-024',
        text: 'En la pestaña Presupuestos, la fila P-024 guarda cliente, correo, fecha de validez, estado e importe. En la pestaña Partidas, ese mismo número identifica dos líneas de un trabajo de rotulación. Tres carteles a 35 € y una instalación de 80 € suman 185 € antes de impuestos. Si cambia una cantidad, la hoja recalcula el importe desde las partidas.',
      },
      {
        title: 'Qué ocurre en cada estado',
        table: {
          columns: ['Estado', 'Qué ocurre'],
          rows: [
            ['Borrador', 'El equipo puede editar las partidas y comprobar las cantidades y totales.'],
            ['Revisado', 'El flujo rellena la plantilla, genera el PDF y guarda su enlace en la hoja.'],
            ['Enviado', 'Se registra la fecha de envío y queda visible hasta cuándo vale la oferta.'],
            ['Aceptado', 'El flujo crea una tarea con el número P-024 y guarda su identificador para evitar duplicados.'],
          ],
        },
      },
      {
        title: 'Tres pruebas antes de enviarlo a un cliente',
        items: [
          'Cambia la cantidad de tres carteles a cuatro, vuelve a generar el PDF y comprueba que el total pasa de 185 € a 220 € antes de impuestos.',
          'Prueba una fila sin correo. El flujo debe dejar el envío pendiente para que alguien pueda corregir el dato.',
          'Procesa dos veces la aceptación de P-024. Busca primero el número de presupuesto en la herramienta de tareas y comprueba que queda una sola tarea.',
        ],
      },
    ],
    service: { fragment: 'automatizacion-procesos', label: 'Ver el servicio de automatización' },
  },
  {
    slug: 'que-tareas-automatizar-primero-en-un-negocio-pequeno',
    title: '¿Qué tareas automatizar primero en un negocio pequeño?',
    description: 'Compara consultas, presupuestos y recordatorios por tiempo semanal y consecuencias de un fallo. Elige qué automatizar con un ejemplo práctico.',
    answer: 'Empieza por una tarea frecuente, con pasos claros y un fallo que puedas detectar y corregir. Si una consulta perdida deja un posible cliente sin respuesta, registrar las consultas y avisar al equipo puede ser mejor primer paso que automatizar el envío de presupuestos, aunque preparar presupuestos lleve más tiempo.',
    sections: [
      {
        title: 'Consultas, presupuestos y recordatorios',
        text: 'Imagina un estudio de reformas que anota durante una semana cuánto tarda en cada tarea. Estas cifras son ilustrativas. Usa las de tu negocio para comparar.',
        table: {
          columns: ['Tarea', 'Tiempo semanal', 'Qué pasa si falla'],
          rows: [
            ['Registrar consultas', '20 × 3 min = 60 min', 'Una consulta puede quedar sin respuesta. Conserva el mensaje original y revisa los avisos fallidos.'],
            ['Preparar presupuestos', '6 × 15 min = 90 min', 'Un importe incorrecto puede llegar al cliente. Automatiza el borrador y revisa precio y partidas antes de enviarlo.'],
            ['Recordar visitas', '12 × 2 min = 24 min', 'El cliente puede recibir la hora equivocada o un aviso de una cita cancelada. Usa la agenda como fuente y prueba cambios y cancelaciones.'],
          ],
        },
      },
      {
        title: 'Por dónde empezaría el estudio',
        text: 'Empezaría por las consultas. Cuando llega un formulario, el flujo registra el mensaje, asigna un responsable y avisa al equipo. El responsable sigue escribiendo la respuesta. Si el aviso se pierde, la consulta queda registrada y se puede recuperar. El siguiente paso sería preparar borradores de presupuestos con los datos ya registrados.',
      },
      {
        title: 'Cómo probarlo antes de ampliarlo',
        items: [
          'Mide una semana de trabajo manual y anota cuántas consultas se quedan pendientes y cuánto tardas en registrarlas.',
          'Prueba el flujo con una consulta normal, una sin teléfono y un envío duplicado. Comprueba que cada consulta válida queda registrada una vez y tiene responsable.',
          'Durante la primera semana, compara los mensajes recibidos con el registro y cuenta también el tiempo de revisión y corrección. Usa ambos resultados para decidir si automatizas otra tarea.',
        ],
      },
    ],
    service: { fragment: 'automatizacion-procesos', label: 'Ver el servicio de automatización' },
  },
];

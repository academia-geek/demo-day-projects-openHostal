/**
 * @swagger
 * components:
 *  schemas:
 *      room:
 *          type: object
 *          properties:
 *              tipo:
 *                  type: string
 *                  description: tipo de habitacion 
 *              descripcion:
 *                  type: string
 *                  description: descripcion de la habitacion del hostal
 *              foto:
 *                  type: string
 *                  description: fotos de las habitaciones 
 *              estado: 
 *                  type: number
 *                  description: estado de la habitacion (1=disponible,2=ocupado,3=reservado sin paga,4= reservadas pagadas 5 =limpieza, 6=no molestar)
 *              capacidad:
 *                  type: string
 *                  description: caracteristicas de la cantidad de personas 
 *              servicios:
 *                  type: string
 *                  description: servicios prestado en la habitacion
 *              id_hostal:
 *                  type: string
 *                  description: relacion del usuario con el hotal  
 *          required: 
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripcion:
 *                  - foto:
 *                  - coordenadas:
 *                  - direccion:
 *      users:
 *          type: object
 *          properties:
 *              nombre: 
 *                  type: string
 *                  description: nombre del usuario
 *              apellido:
 *                  type: string
 *                  description: apellido del usuario
 *              email:
 *                  type: string
 *                  description: correo del usuario 
 *              contrasena: 
 *                  type: string 
 *                  description: contraseña de usuario
 *              celular: 
 *                  type: number
 *                  description: numero de celular de usuario 
 *              tipo_documento:
 *                  type: string
 *                  description: describe el tipo de documento del usuario
 *              numero_documento:
 *                  type: string
 *                  description: numero de documento del usuario
 *              nacionalidad:
 *                  type: string
 *                  description: campo que describe la nacionalidad del usuario
 *              rol: 
 *                  type: string
 *                  description: rol del usuario 
 *              id_hostal:
 *                  type: number
 *                  description: relacion del usuario con el hotal
 *          required: 
 *                  - nombre:
 *                  - apellido:
 *                  - email:
 *                  - contrasena:
 *                  - celular:
 *                  - tipo_documento:
 *                  - numero_documento:
 *                  - nacionalida:
 *                  - rol:
 *                  - id_hostal: 
 *      hostal:
 *          type: object
 *          properties: 
 *              nombre:
 *                  type: string
 *                  description: nombre de hostal
 *              ciudad:
 *                  type: string
 *                  description: ciudad en la cual se encuentra hubicado el hostal
 *              sede:
 *                  type: string
 *                  description: sede del hostal
 *              descripcion:
 *                  type: string
 *                  description: describe la caracteristicas particulares del hostal
 *              direccion:
 *                  type: string
 *                  description: direccion de la sede
 *              foto:
 *                  type: string
 *                  description: url de la imagen 
 *              coordenadas:
 *                  type: string
 *                  description: cordenadas en eje x y del hostal
 *          required: 
 *                  - nombre:
 *                  - ciudad:
 *                  - sede:
 *                  - descripcion:
 *                  - foto:
 *                  - coordenadas:
 *                  - direccion:
 *      Reserva:
 *          type: object
 *          properties:
 *              sede:
 *                  type: string
 *                  description: sede de la reserva
 *              ciudad:
 *                  type: string
 *                  description: ciudad de la reserva
 *              checkin:
 *                  type: string
 *                  description: fecha de entrada de la reserva
 *              checkout:
 *                  type: string
 *                  description: fecha de salida de la reserva
 *              huespedes:
 *                  type: number
 *                  description: cantidad de huespedes de la reserva
 *              noches:
 *                  type: number
 *                  description: cantidad de noches de la reserva
 *              habitacion:
 *                  type: string
 *                  description: habitacion de la reserva
 *              valorTotal:
 *                  type: number
 *                  description: valor total de la reserva
 *          required:
 *                  - sede:
 *                  - ciudad:
 *                  - checkin:
 *                  - checkout:
 *                  - huespedes:
 *                  - noches:
 *                  - habitacion:
 *                  - valorTotal:
 */
/**
 * @swagger
 * /api/hostal:
 *  get:
 *      summary: Trae todas los hostal
 *      tags: [hostal]
 *      responses:
 *          200:
 *              description: Lista de todos los hostal
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/hostal'
 *
 */
/**
 * @swagger
 * /api/hostal/{id}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los hostales
 *      responses:
 *          200:
 *              description: Se consultó hostales por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/hostal:
 *  post:
 *      summary: Crea un nuevo hostal
 *      tags: [hostal]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra hubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe la caracteristicas particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: direccion de la sede    
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          coordenadas:
 *                              type: string
 *                              description: cordenadas en eje x y del hostal       
 *      responses:
 *          200:
 *              description: Hostal creada
 *          400:
 *              description: Hostal no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /api/hostal/{id}:
 *  delete:
 *      summary: Elimina los hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la hostal 
 *      responses:
 *          200:
 *              description: hostal eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/hostal/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [hostal]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                          nombre:
 *                              type: string
 *                              description: nombre de hostal
 *                          ciudad:
 *                              type: string
 *                              description: ciudad en la cual se encuentra hubicado el hostal
 *                          sede:
 *                              type: string
 *                              description: sede del hostal
 *                          descripcion:
 *                              type: string
 *                              description: describe la caracteristicas particulares del hostal
 *                          direccion:
 *                              type: string
 *                              description: direccion de la sede 
 *                          foto:
 *                              type: string
 *                              format: binary
 *                          coordenadas:
 *                              type: string
 *                              description: cordenadas en eje x y del hostal      
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/hostal'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /api/users:
 *  get:
 *      summary: Trae todas los usuarios
 *      tags: [users]
 *      responses:
 *          200:
 *              description: Lista de todos los usuarios
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/users'
 */
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *      summary: Consulta los usuarios por su id 
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      responses:
 *          200:
 *              description: Se consultó usuarios por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/users:
 *  post:
 *      summary: Crea un nuevo usuarios
 *      tags: [users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: usuario creado
 *          400:
 *              description: usuario no creada por error en el envío de datos
 *          500:
 *              description: Hostal no creada por error en el servidor
*/
/**
 * @swagger
 * /api/users/{id}:
 *  delete:
 *      summary: Elimina los usuarios pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la usuarios 
 *      responses:
 *          200:
 *              description: usuarios eliminada
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *      summary: Edita un hostal pasándole el ID como parámetro
 *      tags: [users]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de los usuarios
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   $ref: '#/components/schemas/users'
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/users'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 */
/** 
 * @swagger
 * /api/room:
 *  get:
 *      summary: Trae todas los usuarios
 *      tags: [room]
 *      responses:
 *          200:
 *              description: Lista de todas las habitaciones
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: array
 *                     items:
 *                       $ref: '#/components/schemas/room'
 */
/**
 * @swagger
 * /api/room/{id}:
 *  get:
 *      summary: Consulta las hostales por su id 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones
 *      responses:
 *          200:
 *              description: Se consultó habitaciones por ID
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/roomestado/{estado}:
 *  get:
 *      summary: Consulta las habitaciones y su realcion con el hostal sugun su estado. 
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: estado
 *          schema:
 *              type: number
 *          required: true
 *          description: Identificador segun el estado de la habitaciom
 *      responses:
 *          200:
 *              description: Se consultó habitacion segun su estado
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room:
 *  post:
 *      summary: Crea una nueva habitaciones
 *      tags: [room]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitacion 
 *                      descripcion:
 *                          type: string
 *                          description: descripcion de la habitacion del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: fotos de las habitaciones 
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitacion
 *                      capacidad:
 *                          type: string
 *                          description: caracteristicas de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestado en la habitacion
 *                      id_hostal:
 *                          type: string
 *                          description: relacion del usuario con el hotal  
 *      responses:
 *          200:
 *              description: habitacion creada
 *          400:
 *              description: habitaciones no creada por error en el envío de datos
 *          500:
 *              description: habitacion no creada por error en el servidor
*/
/**
 * @swagger
 * /api/room/{id}:
 *  delete:
 *      summary: Elimina las habitaciones pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      responses:
 *          200:
 *              description: habitaciones eliminada
 *          500:
 *              description: Error en el servidor
 */
/**
 * @swagger
 * /api/room/{id}:
 *  put:
 *      summary: Edita una habitaciones pasándole el ID como parámetro
 *      tags: [room]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las habitaciones 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      tipo:
 *                          type: string
 *                          description: tipo de habitacion 
 *                      descripcion:
 *                          type: string
 *                          description: descripcion de la habitacion del hostal
 *                      foto:
 *                          type: string
 *                          format: binary
 *                          description: fotos de las habitaciones 
 *                      estado: 
 *                          type: string
 *                          description: estado de la habitacion
 *                      capacidad:
 *                          type: string
 *                          description: caracteristicas de la cantidad de personas 
 *                      servicios:
 *                          type: string
 *                          description: servicios prestado en la habitacion
 *                      id_hostal:
 *                          type: string
 *                          description: relacion del usuario con el hotal  
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/room'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */
/**
 * @swagger
 * /api/reserva:
 * get:
 *      summary: Trae todas las reservaciones
 *      tags: [reservas]
 *      responses:
 *          200:
 *              description: Lista de todas las reservaciones
 *              content:
 *                  application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                        $ref: '#/components/schemas/reserva'
 * 
 */
/**
 * @swagger
 * /api/reserva/{id}:
 *  get:
 *      summary: Consulta las reservaciones por su id
 *      tags: [reservas]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las reservaciones
 *      responses:
 *          200:
 *              description: Se consultó reservaciones por ID
 *          500:
 *              description: Error en el servidor
 * 
 */
/**
 * @swagger
 * /api/reserva:
 *  post:
 *      summary: Crea una nueva reservación
 *      tags: [reservas]
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      sede:
 *                          type: string
 *                          description: sede de la reservación 
 *                      ciudad:
 *                          type: string
 *                          description: ciudad de la reservación
 *                      checkIn:
 *                          type: Date
 *                          description: Ingreso de la reservación 
 *                      checkOut: 
 *                          type: Date
 *                          description: Salida de la reservación
 *                      huespedes:
 *                          type: number
 *                          description: Cantidad de huespedes de la reservación 
 *                      noches:
 *                          type: number
 *                          description: Estadia de huespedes de la reservación
 *                      habitacion:
 *                          type: string
 *                          description: Habitación de la reservación
 *                      valorTotal:
 *                          type: number
 *                          description: Valor total de la reservación       
 *      responses:
 *          200:
 *              description: Reservación creada
 *          400:
 *              description: Reservación no creada por error en el envío de datos
 *          500:
 *              description: Reservación no creada por error en el servidor
*/
/**
 * @swagger
 * /api/reserva/{id}:
 *  delete:
 *      summary: Elimina una reservacion
 *      tags: [reservas]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de la reservacion
 *      responses:
 *          200:
 *              description: Se eliminó la reservacion
 *          400:
 *              description: Reservación no eliminada por error en el envio de datos
 */
/**
 * @swagger
 * /api/reserva/{id}:
 *  put:
 *      summary: Edita una reservación pasándole el ID como parámetro
 *      tags: [reservas]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: Identificador de las reservaciones 
 *      requestBody:
 *          content:
 *              multipart/form-data:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      sede:
 *                          type: string
 *                          description: sede de la reservación 
 *                      ciudad:
 *                          type: string
 *                          description: ciudad de la reservación
 *                      checkIn:
 *                          type: Date
 *                          description: Ingreso de la reservación 
 *                      checkOut: 
 *                          type: Date
 *                          description: Salida de la reservación
 *                      huespedes:
 *                          type: number
 *                          description: Cantidad de huespedes de la reservación 
 *                      noches:
 *                          type: number
 *                          description: Estadia de huespedes de la reservación
 *                      habitacion:
 *                          type: string
 *                          description: Habitación de la reservación
 *                      valorTotal:
 *                          type: number
 *                          description: Valor total de la reservación  
 *      responses:
 *          200:
 *              description: Se editó de manera correcta 
 *              content:
 *                 application/json:
 *                  schema:
 *                     type: object
 *                     $ref: '#/components/schemas/reserva'
 *          400:
 *              description: Error en envío de datos por parte del cliente 
 *          500:
 *              description: Error en el servidor
 *
 */


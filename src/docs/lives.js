 /**
 * @swagger
 * tags:
 *   name: Lives
 *   description: Routes for retrieving a monster with their home
 */ 
 
 /**
 * @swagger
 * /lives:
 *   get:
 *     summary: Returns a list of all monsters and their homes.
 *     tags: [Lives]
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lives'
 *       400: 
 *         description: Most likely internal backend database error
 * 
 * /lives/{id}:
 *   get:
 *     summary: Returns an individual monster with their home.
 *     tags: [Lives]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimum: 1
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lives'
 *       400: 
 *         description: Most likely no monster with specified id
 */
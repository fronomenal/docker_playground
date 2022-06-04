 /**
 * @swagger
 * tags:
 *   name: Habitats
 *   description: Routes for managing habitats
 */
 
 /**
 * @swagger
 * /habitats:
 *   get:
 *     summary: Returns a list of all habitats.
 *     description: Temperatures are in degree celsius (°C)
 *     tags: [Habitats]
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitat'
 *       400: 
 *         description: Most likely internal backend database error
 *   post:
 *     summary: Store a habitat into the database
 *     tags: [Habitats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Habitat'
 *     responses:
 *       201: 
 *         description: Succesfully processed the request
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Respone'
 *       400: 
 *         description: Most likely internal backend database error
 * 
 * /habitats/{id}:
 *   get:
 *     summary: Returns an individual habitat.
 *     tags: [Habitats]
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
 *               $ref: '#/components/schemas/Habitat'
 *       400: 
 *         description: Most likely no habitat with specified id
 */
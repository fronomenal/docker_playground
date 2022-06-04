/**
 * @swagger
 * tags:
 *   name: Monsters
 *   description: Routes for managing monsters
 */

 /**
 * @swagger
 * /monsters:
 *   get:
 *     summary: Returns a list of all monsters.
 *     tags: [Monsters]
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Monster'
 *       400: 
 *         description: Most likely internal backend database error
 *   post:
 *     summary: Store a monster into the database.
 *     description: Ensure a habitat already exists on the database before inserting a new monster. ID field is ignored
 *     tags: [Monsters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Monster'
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Response'
 *       201:
 *         description: Monster sucessfuly saved to backend 
 *       400: 
 *         description: Most likely internal backend database error
 * /monsters/{id}:
 *   get:
 *     summary: Returns an individual monster.
 *     tags: [Monsters]
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
 *               $ref: '#/components/schemas/Monster'
 *       400: 
 *         description: Most likely no monster with specified id
 *   patch:
 *     summary: Update an existing monster's property in the database
 *     description: Ensure habitat already exists when providing the home field
 *     tags: [Monsters]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimum: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Monster'
 *     responses:
 *       200: 
 *         description: OK
 *         content: 
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Response' 
 *   delete:
 *     summary: Removes an individual monster from the database.
 *     tags: [Monsters]
 *     parameters:
 *     - in: path
 *       name: id
 *       required: true
 *       schema:
 *         type: integer
 *         minimum: 1
 *     responses:
 *       204: 
 *         description: SUCCESS
 *         content: 
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response'
 *       400: 
 *         description: Most likely no monster with specified id
 */
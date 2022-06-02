/**
 * @swagger
 * components:
 *  schemas:
 *      Monster:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: The unique id of a monster
 *              name:
 *                  type: string
 *                  description: The monster's name
 *              personality:
 *                  type: string
 *                  description: The monster's of personality 
 *              home:
 *                  type: number
 *                  description: Thhe monster's home
 *          example:
 *              id: 666
 *              name: cthulhu 
 *              personality: Evil?
 *              home: 777
 *          required:
 *            - id
 *            - home
 *      Habitat:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: The unique id of a habitat
 *              name:
 *                  type: string
 *                  description: The name of a habitat 
 *              climate:
 *                  type: string
 *                  description: The habitat's climate
 *              temperature:
 *                  type: number
 *                  description: The habitat's temperature
 *          example:
 *              id: 777
 *              name: city of R'lyeh 
 *              climate: wet ocean
 *              temperature: 2
 *          required:
 *            - id
 *      Lives:
 *          type: object
 *          properties:
 *              monster: 
 *                  type: string
 *                  description: The monster living in the habitat specified by the home peroperty
 *              home:
 *                  type: string
 *                  description: The habitat serving as the home of the monster
 *          example:
 *              monster: cthulhu 
 *              home: city of R'lyeh
 *      Response:
 *        type: object
 *        properties:
 *          msg:
 *            type: string
 *            description: A short description of the result
 *          status: 
 *            number: 
 *            description: The returned status code as a field
 *        example:
 *            msg: "Succesfuly processed the request"
 *            status: 20*  
 *
 */
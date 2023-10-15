const express = require("express");
const router = express.Router();
const jobController = require("../controllers/jobController");

/**
 * @swagger
 * /api/jobs/create:
 *   post: # Specify the HTTP method as POST
 *     summary: Create a new job
 *     description: Create a new job posting.
 *     tags: [Jobs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               location_id:
 *                 type: integer
 *               deadline:
 *                 type: string
 *                 format: date
 *               paymentType:
 *                 type: string
 *               jobStatus:
 *                 type: string
 *                 enum: ['Open', 'Closed', 'Deleted']
 *               category_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Job created successfully.
 *       400:
 *         description: Invalid jobStatus value.
 *       500:
 *         description: Internal server error.
 */
router.post("/create", jobController.createJob);

/**
 * @swagger
 * /api/jobs/delete/{id}:
 *   post:
 *     summary: Delete a job by ID
 *     description: Delete a job posting by its ID.
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to delete.
 *         schema:
 *           type: integern
 *     responses:
 *       200:
 *         description: Job deleted successfully.
 *       500:
 *         description: Internal server error.
 */
router.post("/delete/:id", jobController.deleteJobById);

/**
 * @swagger
 * /api/jobs/update/{id}:
 *   put: # Specify the HTTP method as PUT
 *     summary: Update a job by ID
 *     description: |
 *       Update a job posting by its ID.
 *       You can provide more detailed information here.
 *     tags: [Jobs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to update.
 *         schema:
 *           type: integer
 *       - in: body
 *         name: job
 *         description: The updated job object.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             # Add more properties here for the updated job object
 *     responses:
 *       200:
 *         description: Job updated successfully.
 *       500:
 *         description: Internal server error.
 */
router.put("/update/:id", jobController.updateJobById);

/**
 * @swagger
 * /api/jobs/get/{id}:
 *   get:
 *     summary: Get a job by ID
 *     description: Retrieve a job posting by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the job to retrieve.
 *         schema:
 *           type: integer
 *     tags: [Jobs]
 *     responses:
 *       200:
 *         description: Job retrieved successfully.
 *       500:
 *         description: Internal server error.
 */
router.get("/get/:id", jobController.getJobById);

router.get("/all", jobController.getJobs);

/**
 * @swagger
 * /api/locations/{id}:
 *   get:
 *     summary: Get location by ID
 *     description: Retrieve location data by its ID.
 *     tags: [Locations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the location to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Location retrieved successfully.
 *       404:
 *         description: Location not found.
 *       500:
 *         description: Internal server error.
 */
router.get("/locations/all", jobController.getAllLocations);

module.exports = router;

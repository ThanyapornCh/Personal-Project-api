'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Questions',
      [
        {
          data_personal: 'skinType',
          question_type: 'checkSkinType',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          data_personal: 'facialSkinProblemse',
          question_type: 'checkSkinType',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          data_personal: 'skinCare',
          question_type: 'skinCareProduct',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};

'use strict';

const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (data.title) {
      const sectionId = data.section;
      if (sectionId) {
        const section = await strapi.service('api::section.section').findOne(sectionId);
        if (section) {
          data.slug = slugify(data.title);
          data.slug_with_section = section.slug + '#' + slugify(data.title);
        } else {
          data.slug = slugify(data.title);
        }
      } else {
        data.slug = slugify(data.title);
      }
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    
    if (data.title) {
      const sectionId = data.section;
      if (sectionId) {
        const section = await strapi.service('api::section.section').findOne(sectionId);
        if (section) {
          data.slug = slugify(data.title);
          data.slug_with_section = section.slug + '#' + slugify(data.title);
        } else {
          data.slug = slugify(data.title);
        }
      } else {
        data.slug = slugify(data.title);
      }
    }
  },
};

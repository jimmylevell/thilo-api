'use strict';

const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (data.title) {
      data.Slug = slugify(data.title);
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    
    if (data.title) {
      data.Slug = slugify(data.title);
    }
  },
};

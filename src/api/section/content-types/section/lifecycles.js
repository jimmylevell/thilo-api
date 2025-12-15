'use strict';

const slugify = require('slugify');

module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    
    if (data.menu_name) {
      data.slug = slugify(data.menu_name);
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    
    if (data.menu_name) {
      data.slug = slugify(data.menu_name);
    }
  },
};

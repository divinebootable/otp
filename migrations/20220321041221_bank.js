
exports.up = function(knex) {
	return knex.schema
	.createTable('users', function(table) {
            table.increments('users_id').primary()
            table.string('investmentplan', 255).notNullable()
            table.string('firstname', 255).notNullable()
            table.string('middlename', 255).notNullable()
            table.string('lastname', 255).notNullable()
            table.string('dob', 255).notNullable()
            table.string('country', 255).notNullable()
            table.string('passportnumber', 255).notNullable().unique()
            table.string('hash', 255).notNullable()
            table.string('areacode', 255).notNullable()
            table.string('phone_number', 255).notNullable().unique()
            table.string('role', 255).notNullable().defaultTo('users')
            table.string('otp', 255).notNullable().unique()
            table.string('email', 255).notNullable().unique()
            table
                .boolean('is_delete')
                .notNullable()
                .defaultTo(false)
            table.timestamp('created_on').defaultTo(knex.fn.now())
        })
	 .createTable('accounts', function(table) {
            table.increments('account_id').primary()
            table.string('balance', 255).notNullable()
             table
                .integer('users')
                .references('users_id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
            table.timestamp('created_on').defaultTo(knex.fn.now())
        })
  
};

exports.down = function(knex) {
	 return knex.schema.dropTable('users')
   .dropTable('accounts')
  
};

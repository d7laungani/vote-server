
'use strict';

module.exports = function(sequelize, DataTypes)
{
    var Poll = sequelize.define('poll', {
        id: {type: DataTypes.UUID, primaryKey: true},
        question: DataTypes.STRING,
        question_type: DataTypes.STRING,
        active: DataTypes.BOOLEAN,
    })

    return Poll;
}







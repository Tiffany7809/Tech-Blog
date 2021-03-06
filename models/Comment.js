const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        
        id: 
        {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        comment_text: 
        {
            type: DataTypes.STRING,
            validate: 
            {
                len: [5]
            }
        },

        post_id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 
            {
                model: 'post',
                key: 'id'
            }
        },
        
        user_id: 
        {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: 
            {
                model: 'user',
                key: 'id'
            }
        }
    }, 
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;

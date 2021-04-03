import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTasks1617417194489 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tasks",
                columns:[
                    {
                        name:"id",
                        type:"uuid",
                        isPrimary:true
                    },
                    {
                        name:"title",
                        type:"varchar",
                    },
                    {
                        name:"description",
                        type:"varchar",
                    },
                    {
                        name:"end_date",
                        type:"timestamp",
                        isNullable:true
                    },
                    {
                        name:"status",
                        type:"boolean",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"user_id",
                        type:"uuid"
                    }
                ],
                foreignKeys:[
                    {
                        name:"FKUser",
                        referencedTableName:"users",
                        referencedColumnNames:["id"],
                        columnNames:["user_id"],
                        onDelete:"CASCADE",
                        onUpdate:"CASCADE" 
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tasks")
    }
}

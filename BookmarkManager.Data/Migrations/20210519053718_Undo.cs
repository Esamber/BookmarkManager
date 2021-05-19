using Microsoft.EntityFrameworkCore.Migrations;

namespace BookmarkManager.Data.Migrations
{
    public partial class Undo : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Id",
                table: "Bookmarks",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Id",
                table: "Bookmarks");
        }
    }
}

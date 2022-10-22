--liquibase formatted sql

--changeset Me:2
ALTER PROCEDURE dbo.Adummy
@companyId UNIQUEIDENTIFIER = '34492786-A1EA-47B5-9672-DCE443678648'
AS  
BEGIN
  SELECT * FROM COMPANY WHERE COMPANY.companyID = @companyId 
End
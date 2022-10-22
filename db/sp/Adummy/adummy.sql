--liquibase formatted sql

--changeset Me:1
CREATE PROCEDURE dbo.Adummy
AS  
BEGIN
  SELECT * FROM COMPANY
End
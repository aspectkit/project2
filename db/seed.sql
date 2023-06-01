
INSERT INTO Users (ID,Person_Name, Username, Password, Active)
VALUES (7001, 'Eugene Bonsu', 'EugeneBonsu', 'ABC12345', 1),
       (7002, 'Daniel Luna', 'DanielLuna', 'RTUS3456', 1),
       (7003, 'Kyle Lucas', 'KyleLucas', 'TYIk94738', 1),
       (7004, 'Kit', 'Kit', 'TLUIBN34323', 1);


INSERT INTO Games(ID,GameName, GameType,GameVersion,GameSystem)
VALUES (101, 'Grand Theft Auto', 'Action-adventure','gta 5', 'PS5, PS4, PS3, Xbox'),
       (102,'Fifa', 'Sports', '2023', 'PS, Xbox') ;


INSERT INTO UserGames(ID, UserID, GamesID)
VALUES (10001, 7001, 102),
       (10002, 7002, 101),
       (10003, 7003, 102),
       (10004, 7004, 101);
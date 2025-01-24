create or alter view CMNVwContactAgeDays
as
select Id as CMNId, Name as CMNName, BirthDate as CMNBirthDate,
datediff( day, BirthDate, getdate() ) as CMNAgeDays,
Id as CMNContactId
from Contact

use Luhlemncwabe
switched to db Luhlemncwabe
db.createCollection("Member")
{ ok: 1 }
db.Member.insertMany([
  {Membername: "Debbie", Membersurname: "Theart", MemberDOB: ISODate("1980-03-17")},
  {Membername: "Thomas", Membersurname: "Duncan", MemberDOB: ISODate("1976-08-12")}
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6915e1cd80ebb7743f2d60e2'),
    '1': ObjectId('6915e1cd80ebb7743f2d60e3')
  }
}
db.Member.find().pretty()
{
  _id: ObjectId('6915e1cd80ebb7743f2d60e2'),
  Membername: 'Debbie',
  Membersurname: 'Theart',
  MemberDOB: 1980-03-17T00:00:00.000Z
}
{
  _id: ObjectId('6915e1cd80ebb7743f2d60e3'),
  Membername: 'Thomas',
  Membersurname: 'Duncan',
  MemberDOB: 1976-08-12T00:00:00.000Z
}
db.Member.find({DOB:{$gt:ISODate("1979-01-12")}}).pretty()
Luhlemncwabe


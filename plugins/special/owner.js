exports.run = {
   usage: ['owner'],
   category: 'special',
   async: async (m, {
      client
   }) => {
      client.sendContact(m.chat, [{
         name: global.owner_name,
         number: global.owner,
         about: 'Owner & Creator'
      }], m, {
         org: 'h4nz00xx here',
         website: 'github.com/OrewaHanz',
         email: 'hanzoishere@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}

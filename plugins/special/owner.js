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
         org: 'r4zerx here',
         website: 'github.com/OrewaRazer',
         email: 'padukar4zer@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}

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
         org: 'Emily',
         website: 'github.com/OrewaHanz',
         email: 'emilybotz77@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: Malaysia
}

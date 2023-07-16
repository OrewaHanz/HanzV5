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
         org: 'Putbotz',
         website: '-',
         email: 'putrawan461@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}
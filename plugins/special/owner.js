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
         org: '4riessss',
         website: '-',
         email: 'h4nz00x77@gmail.com'
      })
   },
   error: false,
   cache: true,
   location: __filename
}

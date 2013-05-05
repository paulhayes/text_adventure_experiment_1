var engine = require('text_based_adventure_engine');
var player = new engine.Player();



startRoom = new engine.Room({ name : 'bunk room', description : 'a cramped little room, the walls appear to be a dark and metallic, there\'s a dim dripping sound in the distance' });
startRoom.addItem( new engine.Dice(), new engine.Clock(), new engine.Television() );
corridor = new engine.Room({ name : 'corridor', description : 'a long dimly lit corridor' });
atrium = new engine.Room({ name : 'atrium', description : 'a cavenous atrium, poorly lit. Above you is a huge rounded skylight'  });
atrium.addItem();

engine.Door.link( startRoom, corridor, { name : 'steel door', description : 'a steel door, with a metal flap at eye level, slightly ajar' } );
engine.Door.link( corridor, atrium, { name : 'double door', description : 'a set of sliding metal doors' } );

startRoom.addItem( player );

player.see('You slowly open your eyes. Your in a dark cramped bunk.');

engine.Shell.attachPlayerToShell( player );


/*

sounds emiited from an item, are transmitted to all other items in the room that have an onHear or onSee method.

Doors that receive sound, can pass the sound onto their sibling door, and from there into the adjacent room. Door which are open, pass not just sound but also vision into the adjancent room.

A sound recorcing instrucment could catch all transmitted sounds, and store them by time into a data object. Which then when played back, and listend to by the player, could be heard and repeated.




*/
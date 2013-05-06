TODO
====

Sensory events
--------------

sounds emiited from an item, are transmitted to all other items in the room that have an onHear or onSee method.

Doors that receive sound, can pass the sound onto their sibling door, and from there into the adjacent room. Door which are open, pass not just sound but also vision into the adjancent room.

A sound recorcing instrucment could catch all transmitted sounds, and store them by time into a data object. Which then when played back, and listend to by the player, could be heard and repeated.

Dialog system
_____________
Players can converse to nps, using a dialog tree.